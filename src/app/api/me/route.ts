import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Supakorn booranachart",
    studentId: "660610798",
  });
};