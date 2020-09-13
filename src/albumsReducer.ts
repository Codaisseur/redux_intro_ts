// src/albumsReducer.ts
type Album = {
  title: string;
  artist: string;
  genre: string;
};

type Action =
  | { type: "ADD_ALBUM"; payload: Album }
  | { type: "REMOVE_ALBUM"; payload: string };

const initialState: Album[] = [];

export function albumsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    case "REMOVE_ALBUM": {
      return state.filter((album) => {
        return album.title !== action.payload;
      });
    }
    default: {
      return state;
    }
  }
}
