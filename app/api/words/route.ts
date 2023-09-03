import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { category } = await req.json();
    const startToday = new Date();
    startToday.setUTCHours(0, 0, 0, 0);
    const startTomorrow = new Date(startToday);
    startTomorrow.setDate(startTomorrow.getDate() + 1);
    startTomorrow.setUTCHours(0, 0, 0, 0);
    const filterBody: any = {
      movedTo: { $gte: startToday, $lt: startTomorrow },
    };
    if (category !== null && category !== undefined) {
      filterBody.category = category;
    }
    // const doc = await WordModel.find(filterBody);
    return NextResponse.json({
      status: true,
      //   data: doc,
      message: filterBody,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
