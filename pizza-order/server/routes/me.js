import { getMe } from '../services/UserService';

export default router => {
  router.get('/', async (req, res) => {
    try {
      const user = await getMe(req.user.email);

      res.json(user);

      // const {id, email, cart} = user;
      // const userData = { userId: id, login: email, cart, message: "Вы авторизированы" }; // кто вы? :)
    } catch (err) {
      res.status(500).json({ message: "Internal error", err });
    }
  });

  return router;
}
