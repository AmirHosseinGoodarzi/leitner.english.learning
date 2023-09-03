import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { user } = await req.json();
    const startToday = new Date();
    startToday.setUTCHours(0, 0, 0, 0);
    // await WordModel.updateMany(
    //   {
    //     $and: [
    //       { user },
    //       { category: { $ne: CategoryEnum.ONE } },
    //       { category: { $ne: CategoryEnum.COMPLETED } },
    //       { movedTo: { $lt: startToday } },
    //     ],
    //   },
    //   {
    //     movedTo: new Date(),
    //     category: CategoryEnum.ONE,
    //   }
    // );
    return NextResponse.json({
      status: true,
      message: "Rebuild operation sucessfully completed.",
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
