
export default function FullStackInfo() {
  return (
    <div className={`px-16 w-3/4 m-auto`}>
      <p className={`pt-8`}>
        My specialty lies in developing and designing responsive websites that's
        fits your business needs using the latest technologies. I'll deliver
        your product on time with your requirement and you will get to see my
        creative side.
      </p>

      <h2 className={`font-bold text-2xl pt-10`}> Skills</h2>

      <div className={`pt-6 flex justify-evenly items-start`}>
        <div className={"bg-primary-500 text-accent-700 p-8 rounded-md"}>
          <h3 className={`font-bold text-xl pb-3`}>Frontend</h3>
          <p>
            <ul>
              <li>- React, Next.js,Gatsby.js</li>
              <li>- HTML, CSS, JavaScript,</li>
              <li>- Sass, styled-components,</li>
              <li>- Bootstrap, tailwindcss,</li>
              <li>- Material UI, Ant Design</li>
              <li>- TypeScript, GraphQL,</li>
              <li>- Apollo Client</li>
            </ul>
          </p>
        </div>
        <div className={"bg-primary-500 text-accent-700 p-8 rounded-md"}>
          <h3 className={`font-bold text-xl pb-3`}>Backend</h3>
          <p>
            <ul>
              <li>- GraphQL APIs,</li>
              <li>- Apollo Server,</li>
              <li>- REST APIs,</li>
              <li>- Node.js, Express, Koa, </li>
              <li>- TypeScript, JavaScript,</li>
              <li>- Strapi</li>
            </ul>
          </p>
        </div>
        <div className={"bg-primary-500 text-accent-700 p-8 rounded-md"}>
          <h3 className={`font-bold text-xl pb-3`}>Database</h3>
          <p>
            <ul>
              <li>- MongoDB</li>
              <li>- Postgres</li>
              <li>- MySQL</li>
              <li>- SQL Server</li>
              <li>- SQLite</li>
            </ul>
          </p>
        </div>
        <div className={"bg-primary-500 text-accent-700 p-8 rounded-md "}>
          <h3 className={`font-bold text-xl pb-3`}>Hosting</h3>
          <p>
            <ul>
              <li>- Vercel</li>
              <li>- Heroku</li>
              <li>- Netlify</li>
            </ul>
          </p>
        </div>
      </div>

   
    </div>
  );
}
