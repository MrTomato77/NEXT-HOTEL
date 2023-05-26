import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({

  providers: [
    CredentialsProvider({
      
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text'},
        password: { label: 'Password', type: 'password' }
      },
      // This is were you can put your own external API call to validate Email and Password
      authorize: async (credentials) => {
        if (credentials.email === 'user@email.com' && credentials.password === '123') {
          return { id: 11, name: 'User', email: 'user@email.com'} 
        }
            
        return null;
      
      }
    }),

    CredentialsProvider({
      id: "domain-login",
      name: "User I Credentials",
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: 99, name: "Jane Smith", email: "janesmith@example.com" }
          
        if (user) {
          return user
        } else {
          return null  
        }
      }
    }),
    CredentialsProvider({
      id: "user-login",
      name: "User II Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const user = { id: 26, name: "David Smith", email: "davesmith@example.com" }
  
        if (user) {
          return user
        } else {
          return null
  
        }
      }
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  pages: {
    signIn: '/login',
//    signOut: '/signout',

  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async jwt({ token }) {
      
      token.userRole = "regusr"
      return token
    },
  },

})