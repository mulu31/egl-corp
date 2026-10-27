import { useState } from "react";
import {
  FiX,
  FiCheckCircle,
  FiCreditCard,
  FiUser,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

export function BookingWizard({
  isOpen,
  onClose,
  eventTitle,
}: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "standard",
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-background w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-serif text-xl font-semibold">Book Event</h2>
            <p className="text-xs text-muted-foreground">{eventTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Progress */}
        <div className="flex border-b border-border">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex-1 text-center py-3 text-sm font-medium border-b-2 ${
                step >= i
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              Step {i}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <FiCreditCard /> Select Ticket
              </h3>
              <div className="space-y-3">
                <label
                  className={`block p-4 border rounded-lg cursor-pointer ${formData.ticketType === "standard" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <input
                    type="radio"
                    name="ticket"
                    value="standard"
                    checked={formData.ticketType === "standard"}
                    onChange={() =>
                      setFormData({ ...formData, ticketType: "standard" })
                    }
                    className="hidden"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">
                        Standard Pass
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Access to all sessions
                      </p>
                    </div>
                    <span className="font-bold text-primary">Free</span>
                  </div>
                </label>
                <label
                  className={`block p-4 border rounded-lg cursor-pointer ${formData.ticketType === "vip" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <input
                    type="radio"
                    name="ticket"
                    value="vip"
                    checked={formData.ticketType === "vip"}
                    onChange={() =>
                      setFormData({ ...formData, ticketType: "vip" })
                    }
                    className="hidden"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">VIP Pass</p>
                      <p className="text-sm text-muted-foreground">
                        Includes lunch & networking
                      </p>
                    </div>
                    <span className="font-bold text-primary">$50</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <FiUser /> Your Details
              </h3>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-border rounded-md p-2 bg-background"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-border rounded-md p-2 bg-background"
                  placeholder="john@example.com"
                />
              </div>
              <div className="p-4 bg-muted/50 rounded-lg mt-4 text-sm text-muted-foreground">
                <strong>Note:</strong> This is a demonstration wizard. No actual
                data will be saved or submitted to a backend.
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-8">
              <div className="flex justify-center text-green-500 mb-4">
                <FiCheckCircle size={64} />
              </div>
              <h3 className="text-2xl font-serif font-semibold">
                Booking Confirmed!
              </h3>
              <p className="text-muted-foreground">
                (Demo Only) Your {formData.ticketType} ticket for{" "}
                <strong>{eventTitle}</strong> has been reserved. A confirmation
                email would normally be sent to {formData.email || "your email"}
                .
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-between">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted disabled:opacity-50 flex items-center gap-2"
          >
            <FiArrowLeft /> Back
          </button>

          {step < 3 ? (
            <button
              onClick={handleNext}
              disabled={step === 2 && (!formData.name || !formData.email)}
              className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2"
            >
              Next <FiArrowRight />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
