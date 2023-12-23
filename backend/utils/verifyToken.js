import jwt from 'jsonwebtoken'

// Creating a middleware function to check for a token on requests that need them
function verifyToken(req, res, next) {
    const token = req.cookies.jwt;
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attaching the decoded token to the user so we can grab the userId from it in the route
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
    }
}

export default verifyToken