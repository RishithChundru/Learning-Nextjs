import {NextResponse} from "next/server";
import type{NextRequest} from "next/server";

export function middleware(request: NextRequest){
    // return NextResponse.redirect(new URL("/",request.url));
    const response=NextResponse.next();
    const themePreference=request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme","dark");
    }

    response.headers.set("custom-header","custom-value");
    return response;
}

// export const config={
//     matcher:"/Profile",
// };