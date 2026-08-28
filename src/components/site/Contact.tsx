import { useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { business, projectTypes } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const empty: Fields = { name: "", phone: "", email: "", projectType: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (values.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.projectType) errors.projectType = "Please choose a project type.";
  if (values.message.trim().length < 10)
    errors.message = "Please tell us a little about the project (10+ characters).";
  return errors;
}

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3 text-[0.98rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";
const labelClass =
  "font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setValues(empty);
    }
  };

  return (
    <section id="contact" className="section-pad bg-secondary">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">Free Estimate</p>
          <h2 className="display-lg mt-5">Ready to Talk About Your Project?</h2>
          <p className="mt-5 text-muted-foreground">
            Send over a few details and we'll get back to you to talk through scope, timing and next
            steps. Prefer to talk it through now? Give us a call.
          </p>

          <dl className="mt-10 space-y-px bg-border">
            <div className="flex items-center gap-4 bg-card p-5">
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className={labelClass}>Phone</dt>
                <dd>
                  <a
                    href={business.phoneHref}
                    className="font-display text-lg font-bold hover:text-accent"
                  >
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-5">
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <dt className={labelClass}>Email</dt>
                <dd className="truncate">
                  <a href={business.emailHref} className="text-lg hover:text-accent">
                    {business.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div
              role="status"
              className="flex h-full flex-col items-start justify-center border border-border bg-card p-10"
            >
              <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-2xl">Thank you — your request has been sent.</h3>
              <p className="mt-3 text-muted-foreground">
                We'll follow up shortly to talk through your project. For anything urgent, call{" "}
                <a href={business.phoneHref} className="font-semibold text-foreground underline">
                  {business.phoneDisplay}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-base btn-outline-dark mt-8"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="border border-border bg-card p-6 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => set("name")(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(fieldClass, errors.name && "border-destructive")}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={cn(fieldClass, errors.phone && "border-destructive")}
                    placeholder="(210) 000-0000"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email")(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(fieldClass, errors.email && "border-destructive")}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={(e) => set("projectType")(e.target.value)}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? "projectType-error" : undefined}
                    className={cn(fieldClass, errors.projectType && "border-destructive")}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-2 text-sm text-destructive">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => set("message")(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(fieldClass, "resize-y", errors.message && "border-destructive")}
                    placeholder="Tell us about the roof, repair or renovation you have in mind."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button type="submit" className="btn-base btn-accent mt-8 w-full sm:w-auto">
                Request a Free Estimate
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
