import ExpertShell from "@/components/ExpertShell";

export default function ExpertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ExpertShell>{children}</ExpertShell>;
}
