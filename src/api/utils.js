import useAxiosPublic from "../hooks/useAxiosPublic";

export const saveUser = async user => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const axiosPublic = useAxiosPublic(); 
  await axiosPublic.post(`/users/${user?.email}`, {
    uid: user?.uid,
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
  })
}
