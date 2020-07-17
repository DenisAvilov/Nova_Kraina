import { instance } from "./Api";

type Captcha =  { url: string | null }
export const securityApi = {
  security : async () =>{
       const res = await  instance.get<Captcha>('/security/get-captcha-url')
      return res.data.url
  }
}