/**
 * Tracking Constants
 */
export type ComponentID =
  | 'Button'
  | 'Error'
  | 'Footer'
  | 'FormControl'
  | 'Helper'
  | 'Label'
  | 'TextInput'
  | 'Header'
  | 'Card'
  | 'TextArea'
  | 'Text'
  | 'Navigation'
  | 'TextArea'
  | 'Table'
  | 'Checkbox'
  | 'RadioButton'
  | 'Fieldset'
  | 'Notification'
  | 'Panel'
  | 'Pagination'
  | 'Footer'
  | 'Select'
  | 'TabbedPanel'
  | 'Select'
  | 'LoadingIndicator'
  | 'Dropdown'
  | 'ProgressBar'
  | 'FilterPanel'
  | 'Avatar';

interface TrackingConstantsInterface {
  components: {
    [key in ComponentID]: {
      id: ComponentID;
      events?: Record<string, string>;
    };
  };
  events: Record<string, string>;
}

export enum EventMap {
  mount = 'mount',
}

export const TrackingConstants: TrackingConstantsInterface = {
  components: {
    Button: {
      id: 'Button',
      events: {
        click: 'click',
      },
    },
    Error: {
      id: 'Error',
    },
    Footer: {
      id: 'Footer',
    },
    FormControl: {
      id: 'FormControl',
    },
    Helper: {
      id: 'Helper',
    },
    Label: {
      id: 'Label',
    },
    TextInput: {
      id: 'TextInput',
    },
    TextArea: {
      id: 'TextArea',
    },
    Header: {
      id: 'Header',
    },
    Card: {
      id: 'Card',
    },
    Text: {
      id: 'Text',
    },
    Navigation: {
      id: 'Navigation',
    },
    Table: {
      id: 'Table',
    },
    Checkbox: {
      id: 'Checkbox',
    },
    Fieldset: {
      id: 'Fieldset',
    },
    RadioButton: {
      id: 'RadioButton',
    },
    Notification: {
      id: 'Notification',
    },
    Panel: {
      id: 'Panel',
    },
    Pagination: {
      id: 'Pagination',
    },
    Select: {
      id: 'Select',
    },
    TabbedPanel: {
      id: 'TabbedPanel',
    },
    LoadingIndicator: {
      id: 'LoadingIndicator',
    },
    Dropdown: {
      id: 'Dropdown',
    },
    ProgressBar: {
      id: 'ProgressBar',
    },
    FilterPanel: {
      id: 'FilterPanel',
    },
    Avatar: {
      id: 'Avatar',
    },
  },
  events: EventMap,
};

export enum BREAKPOINT_SIZES {
  SMALL = '500px',
  MEDIUM = '720px',
  LARGE = '980px',
}

export const Breakpoint = {
  s: `(min-width: ${BREAKPOINT_SIZES.SMALL})`,
  m: `(min-width: ${BREAKPOINT_SIZES.MEDIUM})`,
  l: `(min-width: ${BREAKPOINT_SIZES.LARGE})`,
};

export enum Key {
  ESC = 'Escape',
  ENTER = 'Enter',
  LEFT_ARROW = 'ArrowLeft',
  RIGHT_ARROW = 'ArrowRight',
  LEFT = 'Left', //IE supported left key
  RIGHT = 'Right', //IE supported right key
  HOME = 'Home',
  END = 'End',
  TAB = 'Tab',
  SPACE = ' ',
}

export enum Z_INDEX {
  ZERO = 1000,
  ONE = 1100,
  TWO = 1200,
  THREE = 1300,
  FOUR = 1400,
  FIVE = 1500,
  SIX = 1600,
  SEVEN = 1700,
  EIGHT = 1800,
  NINE = 1900,
}
