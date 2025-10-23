require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Auth token not provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify and decode JWT
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach decoded payload (user data) to request object
    req.user = decodedUser;

    // Optional: log to see what’s inside decoded token
    console.log('Decoded user:', decodedUser);

    next();
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    return res.status(403).json({ error: 'Invalid or expired token.' });
  }
};

module.exports = verifyToken;
