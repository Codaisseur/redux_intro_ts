// src/albumsReducer.ts
type Album = {
  title: string;
  artist: string;
  genre: string;
};

type Action = { type: "ADD_ALBUM"; payload: Album };

const initialState: Album[] = [];

export function albumsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
