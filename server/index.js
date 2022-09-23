import express from 'express';
import helmet from 'helmet';

import apolloServer from './apolloServer';

const app = express();
const port = 3000;

// Helmet Security
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hsts({ maxAge: 90*24*60*60, force: true }));
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self"],
    }
}));

apolloServer.start()
    .then(() => {
        apolloServer.applyMiddleware({ app });

        app.listen({ port }, () => {
            console.log(`Server is listening on port ${port}`);
        });
    });
