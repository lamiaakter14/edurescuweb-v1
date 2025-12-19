import { StudentShell } from '@/components/student/layout/StudentShell'

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <StudentShell>{children}</StudentShell>
}
