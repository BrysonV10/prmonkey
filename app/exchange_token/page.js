"use client"
import PocketBase from "pocketbase"
import { useEffect } from "react"


export default function RetrieveStravaToken(){
    useEffect(()=> {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)
        if(pb.authStore.model == null){
            return (
                <p>Strava Link failed, please <a href="/login">login</a> to PR Monkey!</p>
            )
        }
        let params = new URLSearchParams(window.location.search);
        let provider = JSON.parse(window.localStorage.getItem("OAuthProviderInfo"));
        pb.collection("users").authWithOAuth2Code(
            "strava",
            params.get("code"),
            provider.codeVerifier,
            "http://localhost:3000/exchange_token"
        ).then((res)=> {
            console.log(res);
            window.open("", "_self");
            window.close();
            return (
                <p>Strava Link successful! You can now close this tab.</p>
            )
        }).catch((err)=> {
            console.error(err);
            return (
                <p>Strava Link failed, please <a href="/login">login</a> to PR Monkey</p>
            )
        })
        
    }, [])


} 