import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from 'react';
type GalleryProps = { url: string; caption?: string }[];

const gallery = {
  womenCollections: [
    { url: 'design-w-1', category: 'women' },
    { url: 'design-w-2', category: 'women' },
    { url: 'design-w-3', category: 'women' },
    { url: 'design-w-4', category: 'women' },
    { url: 'design-w-5', category: 'women' },
    { url: 'design-w-6', category: 'women' },
    { url: 'design-w-7', category: 'women' },
    { url: 'design-w-8', category: 'women' },
    { url: 'design-w-9', category: 'women' },
    { url: 'design-w-10', category: 'women' },
    { url: 'design-w-11', category: 'women' },
    { url: 'design-w-12', category: 'women' },
    { url: 'design-w-13', category: 'women' },
    { url: 'design-w-14', category: 'women' },
    { url: 'design-w-15', category: 'women' },
    { url: 'design-w-16', category: 'women' },
    { url: 'design-w-17', category: 'women' },
    { url: 'design-w-18', category: 'women' },
    { url: 'design-w-19', category: 'women' },
    { url: 'design-w-20', category: 'women' },
    { url: 'design-w-21', category: 'women' },
    { url: 'design-w-22', category: 'women' },
    { url: 'design-w-23', category: 'women' },
    { url: 'design-w-24', category: 'women' },
    { url: 'design-w-25', category: 'women' },
    { url: 'design-w-26', category: 'women' },
    { url: 'design-w-27', category: 'women' },
    { url: 'design-w-28', category: 'women' },
    { url: 'design-w-29', category: 'women' },
    { url: 'design-w-30', category: 'women' },
    { url: 'design-w-31', category: 'women' },
    { url: 'design-w-32', category: 'women' },
    { url: 'design-w-33', category: 'women' },
    { url: 'design-w-34', category: 'women' },
    { url: 'design-w-35', category: 'women' },
    { url: 'design-w-36', category: 'women' },
    { url: 'design-w-37', category: 'women' },
    { url: 'design-w-38', category: 'women' },
    { url: 'design-w-39', category: 'women' },
    { url: 'design-w-40', category: 'women' },
    { url: 'design-w-41', category: 'women' },
    { url: 'design-w-42', category: 'women' },
    { url: 'design-w-43', category: 'women' },
    { url: 'design-w-44', category: 'women' },
    { url: 'design-w-45', category: 'women' },
    { url: 'design-w-46', category: 'women' },
    { url: 'design-w-47', category: 'women' },
    { url: 'design-w-48', category: 'women' },
    { url: 'design-w-49', category: 'women' },
    { url: 'design-w-50', category: 'women' },
    { url: 'design-w-51', category: 'women' },
    { url: 'design-w-52', category: 'women' },
    { url: 'design-w-53', category: 'women' },
    { url: 'design-w-54', category: 'women' },
    { url: 'design-w-55', category: 'women' },
  ],
  menCollections: [
    { url: 'design-m-1', category: 'men' },
    { url: 'design-m-2', category: 'men' },
    { url: 'design-m-3', category: 'men' },
  ],
};

interface State {
  gallery: { [k: string]: GalleryProps };
  selectedId: string;
}

enum types {
  GALLERY_ALL,
  GALLERY_SELECT,
}

type Actions =
  | { type: types.GALLERY_ALL }
  | { type: types.GALLERY_SELECT; payload: { id: string } };

const initialState: State = {
  gallery: gallery,
  selectedId: '',
};

const galleryReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case types.GALLERY_ALL:
      return state.gallery;
    case types.GALLERY_SELECT:
      return {
        ...state,
        selectedId: action.payload.id,
      };
    default:
      return state;
  }
};

const GalleryContext = createContext<State | any>(initialState);

export const GalleryProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const getAllGalleries = () => dispatch({ type: types.GALLERY_ALL });
  const selectGallery = (id) =>
    dispatch({ type: types.GALLERY_SELECT, payload: { id } });

  const value = useMemo(
    () => ({
      ...state,
      getAllGalleries,
      selectGallery,
    }),
    [state]
  );

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('Gallery context must be used within GalleryProvider');
  }

  return context;
};
