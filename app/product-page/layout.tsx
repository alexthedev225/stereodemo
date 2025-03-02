

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#2d2d2d]">
     
      <main>{children}</main>
    </div>
  );
}
