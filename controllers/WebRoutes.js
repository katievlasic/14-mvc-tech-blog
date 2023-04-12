const router = require('express').Router();
const { Comment, User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //console.log(req.session);
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    // Serialize data so the template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      comments,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try{
    res.render("login", {
      // logged_in: req.session.logged_in
    });
  }
 catch (err) {
  console.log(err);
  res.status(500).json(err);
 }
});

module.exports = router;

// If the user is already logged in, redirect the request to another route
// if (req.session.logged_in) {
//   res.redirect('/');
//   return;
// }
