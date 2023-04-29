const router = require('express').Router();
const { Comment, User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //console.log(req.session);
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User, 
        }, //post.user
        {
          model: Comment,
          include: [{
            model:User
          }]
        } // post.comment as comment then comment.user
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User, 
        }, 
        {
          model: Comment,
          include: [{
            model:User
          }]
        }
      ],
    });
    // Serialize data so the template can read it
    const post = postData.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render('post', { 
      post,
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
      logged_in: req.session.logged_in
    });
  }
 catch (err) {
  console.log(err);
  res.status(500).json(err);
 }
});

module.exports = router;