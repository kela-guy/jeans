import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const apiKey = process.env.PAYPLUS_API_KEY
    const secretKey = process.env.PAYPLUS_SECRET_KEY
    const paymentPageUid = process.env.PAYPLUS_PAYMENT_PAGE_UID

    if (!apiKey || !secretKey || !paymentPageUid) {
      return NextResponse.json(
        { error: "Payment configuration missing" },
        { status: 500 }
      )
    }

    const response = await fetch(
      "https://restapi.payplus.co.il/api/v1.0/PaymentPages/generateLink",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.stringify({
            api_key: apiKey,
            secret_key: secretKey,
          }),
        },
        body: JSON.stringify({
          payment_page_uid: paymentPageUid,
          charge_method: 1, // regular charge
          customer: {
            customer_name: name,
            email: email,
            phone: phone,
          },
          sendEmailApproval: true,
          sendEmailFailure: true,
        }),
      }
    )

    const data = await response.json()

    if (!response.ok || !data?.data?.payment_page_link) {
      console.error("[PayPlus] Error response:", JSON.stringify(data))
      return NextResponse.json(
        { error: data?.results?.description || "Payment link generation failed" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      paymentLink: data.data.payment_page_link,
    })
  } catch (error) {
    console.error("[PayPlus] Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
