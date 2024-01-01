import {withAuth} from "next-auth/middleware";


export default withAuth;
//every request is going to pass through a middleware for security
export const config={
    matcher: ["/chat","/chat/:id*","/register"]
};