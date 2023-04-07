import {useUser} from '@auth0/nextjs-auth0/client'
export default function handler(req, res) {
  const [user,isLoading] = useUser();
  let sub = user.sub;
  let userid = sub.split("|")[1];
  res.json({ userId: userid });
}