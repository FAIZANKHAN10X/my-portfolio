import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // You can add other middleware logic here if needed in the future
    return NextResponse.next()
}

export const config = {
    matcher: ['/'],
};