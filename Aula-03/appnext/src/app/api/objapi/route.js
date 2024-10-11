import { NextResponse } from "next/server";

export function GET(res){
    
    res = [

        { nome: "Guilherme" },
        { nome: "Ryan" },
        { nome: "Yvisom" },
    ]

    return NextResponse.json(
        {res},
        {status: 200}
    )
}