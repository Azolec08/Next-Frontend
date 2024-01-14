//useReducer state types
export type stateTypes = {
  switch: boolean;
};

//Action useReducer Types

export type actionTypes = { type: "SIDESWITCH"; payload: boolean };

// Navbar Links and title Types
export type LinkTypes = {
  title: string;
  path: string;
};

//PostsCard Types
export type PostTypes = {
  _id: number;
  title: string;
  image: string;
  video: string;
  author: string;
  userId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

//PostUser Types

export type userTypes = {
  _id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};
