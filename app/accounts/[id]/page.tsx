import AccountDetailScreen from "@/components/account-detail-screen"
import { notFound } from "next/navigation"

export default function AccountDetail({ params }: { params: { id: string } }) {
  // Check if the ID is valid
  if (!params.id || isNaN(Number(params.id))) {
    notFound()
  }

  return <AccountDetailScreen accountId={Number(params.id)} />
}

