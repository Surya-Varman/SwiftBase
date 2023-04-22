import {useUser} from '@auth0/nextjs-auth0/client'
export default function handler(req, res) {
  console.log("reached here")
  // res.send("reached here")
  const [user,isLoading] = useUser();
  res.send("reached here")
  let sub = user.sub;
  res.send({ userId: sub });
}