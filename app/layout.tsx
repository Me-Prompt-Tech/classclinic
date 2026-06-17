import "./globals.css";

export const metadata = {
  title: "คลาสคลินิกโคราช",
  description: "Beauty Clinic Booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}