import type { FormEvent } from "react";
import "./Reservation.css";

type ReservationProps = {
  whatsappNumber: string;
};

function getLocalDate() {
  const today = new Date();

  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
    today.getDate(),
  ).padStart(2, "0")}`;
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M9 8c.5 3 2 4.5 5 5l1-1 2 1c-.5 2-1.5 2.5-3 2-4-1-6-3-7-7-.5-1.5 0-2.5 2-3l1 2-1 1Z" />
    </svg>
  );
}

export default function Reservation({ whatsappNumber }: ReservationProps) {
  const handleReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const specialRequests = String(formData.get("specialRequests") || "").trim();
    const message = `Hello Royal Spice! I would like to reserve a table.

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Date: ${formData.get("date")}
Time: ${formData.get("time")}
Number of Guests: ${formData.get("guests")}
Special Requests: ${specialRequests || "None"}

Please confirm my reservation. Thank you!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-container">
        <div className="reservation-intro">
          <p className="reservation-eyebrow">Reserve your experience</p>
          <h2 className="reservation-title">
            Save your seat at Royal Spice
            <span aria-hidden="true" />
          </h2>
          <p className="reservation-copy">
            Planning a family dinner, celebration, or relaxed evening out? Share your details
            and send your request directly to us on WhatsApp.
          </p>

          <div className="reservation-info">
            <div className="reservation-hours">
              <span className="reservation-info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <strong>Open daily</strong>
                <p>11:00 AM — 11:00 PM</p>
              </div>
            </div>
            <p className="reservation-notice">
              Your request is not automatically confirmed. Our team will reply on WhatsApp to
              confirm availability.
            </p>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleReservation}>
          <div className="reservation-form-heading">
            <span className="reservation-form-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2" />
                <path d="M3 20v-2a6 6 0 0 1 12 0v2m0-6c3 0 6 2 6 5v1" />
              </svg>
            </span>
            <div>
              <h3>Reservation details</h3>
              <p>All fields marked * are required.</p>
            </div>
          </div>

          <div className="reservation-fields">
            <label className="reservation-field reservation-field-full">
              <span>Customer name *</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your full name"
                required
              />
            </label>

            <label className="reservation-field reservation-field-full">
              <span>Phone number *</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Enter your phone number"
                required
              />
            </label>

            <label className="reservation-field">
              <span>Reservation date *</span>
              <input type="date" name="date" min={getLocalDate()} required />
            </label>

            <label className="reservation-field">
              <span>Reservation time *</span>
              <input type="time" name="time" required />
            </label>

            <label className="reservation-field reservation-field-full">
              <span>Number of guests *</span>
              <select name="guests" defaultValue="" required>
                <option value="" disabled>
                  Select guest count
                </option>
                {Array.from({ length: 12 }, (_, index) => index + 1).map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
                <option value="13+">13+ Guests</option>
              </select>
            </label>

            <label className="reservation-field reservation-field-full">
              <span>Special requests</span>
              <textarea
                name="specialRequests"
                placeholder="Birthday celebration, high chair, dietary needs..."
              />
            </label>
          </div>

          <button type="submit" className="reservation-submit">
            <WhatsAppIcon />
            Reserve Table via WhatsApp
          </button>
          <p className="reservation-helper">
            WhatsApp will open with your reservation details ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
