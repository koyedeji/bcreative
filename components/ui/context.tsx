import {
  createContext,
  useMemo,
  useReducer,
  useContext,
  ReactNode,
  FC,
} from 'react';

interface State {
  isNavOpen: boolean;
  isModalOpen: boolean;
  modalView: string;
}

type ViewVariant = 'GALLERY_VIEW';

enum types {
  UI_NAV_OPEN,
  UI_NAV_CLOSE,
  UI_MODAL_OPEN,
  UI_MODAL_CLOSE,
  UI_MODAL_VIEW,
}

type Action =
  | { type: types.UI_NAV_OPEN }
  | { type: types.UI_NAV_CLOSE }
  | { type: types.UI_MODAL_OPEN }
  | { type: types.UI_MODAL_CLOSE }
  | { type: types.UI_MODAL_VIEW; payload: { view: string } };

const initialState: State = {
  isNavOpen: false,
  isModalOpen: false,
  modalView: 'GALLERY_VIEW',
};

const uiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case types.UI_NAV_OPEN:
      return {
        ...state,
        isNavOpen: true,
      };
    case types.UI_NAV_CLOSE:
      return {
        ...state,
        isNavOpen: false,
      };
    case types.UI_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
      };
    case types.UI_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
        modalView: initialState.modalView,
      };
    case types.UI_MODAL_VIEW: {
      return {
        ...state,
        modalView: action.payload.view,
      };
    }
    default:
      return state;
  }
};

interface ContextProps extends State {
  toggleNavbar?(): void;
  closeNavbar?(): void;
  openNavbar?(): void;
  openModal?(payload?: { id: string }): void;
  closeModal?(): void;
  scrollToTop?(): void;
  setModalView?(view: string): void;
}

const UIContext = createContext<ContextProps>(initialState);

UIContext.displayName = 'UIContext';

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openNavbar = () => dispatch({ type: types.UI_NAV_OPEN });

  const closeNavbar = () => dispatch({ type: types.UI_NAV_CLOSE });

  const toggleNavbar = () => {
    return state.isNavOpen ? closeNavbar() : openNavbar();
  };

  const openModal = () => dispatch({ type: types.UI_MODAL_OPEN });

  const closeModal = () => dispatch({ type: types.UI_MODAL_CLOSE });

  const setModalView = (view: ViewVariant) =>
    dispatch({ type: types.UI_MODAL_VIEW, payload: { view } });

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const value = useMemo(
    () => ({
      ...state,
      openNavbar,
      closeNavbar,
      toggleNavbar,
      scrollToTop,
      openModal,
      closeModal,
      setModalView,
    }),
    [state]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('UI context must be used within UIProvider');
  }
  return context;
};
