export const checkRole = (context, roles) => {

 if (!context.user) {
   throw new Error("Unauthorized");
 }

 if (!roles.includes(context.user.role)) {
   throw new Error("Forbidden");
 }
};