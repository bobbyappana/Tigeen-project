import { actionType } from "./constants";

const companyLogo = {}
const presetColor = {}
const continueButton = {}
const changeColor = {}
const showHeader ={}
const showFooter={}
const leftDrawer={}
const rightDrawer={}
const showTab ={}
const showMenu={}
export const logoReducer = (state = companyLogo, action) => {
    switch (action.type) {
        case actionType.COMPANY_LOGO_LEFT:
            return {
                ...state,
                logo: action.logo
            }
        default: {
            return {
                ...state
            }
        }
    }

}

export const presetReducer = (state = presetColor, action) => {

    switch (action.type) {
        case actionType.PRESET_COLOR:
            return {
                ...state,
                checked: action.checked
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export const continueReducer = (state = continueButton, action) => {
    switch (action.type) {
        case actionType.CONTINUE_BUTTON:
            return {
                ...state,
                continue: action.continue
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export const colorReducer = (state = changeColor, action) => {
    switch (action.type) {
        case actionType.COLOR_CHANGE:
            return {
                ...state,
                color: action.color
            }
        default: {
            return {
                ...state
            }
        }
    }

}

export const showHeaderReducer = (state = showHeader, action) => {
    switch (action.type) {
        case actionType.SHOW_HEADER:
            return {
                ...state,
                header: action.header
            }
        default: {
            return {
                ...state
            }
        }
    }

}

export const showFooterReducer = (state = showFooter, action) => {
    switch (action.type) {
        case actionType.SHOW_FOOTER:
            return {
                ...state,
                footer: action.footer
            }
        default: {
            return {
                ...state
            }
        }
    }

}

export const leftReducer = (state = leftDrawer, action) => {
    switch (action.type) {
        case actionType.LEFT_DRAWER:
            return {
                ...state,
                leftDrawer: action.leftDrawer
            }
        default: {
            return {
                ...state
            }
        }
    }

}

export const rightReducer = (state = rightDrawer, action) => {
    switch (action.type) {
        case actionType.RIGTH_DRAWER:
            return {
                ...state,
                rightDrawer: action.rightDrawer
            }
        default: {
            return {
                ...state
            }
        }
    }

}


export const tabReducer = (state = showTab, action) => {
    switch (action.type) {
        case actionType.SHOW_TABS:
            return {
                ...state,
                showTab: action.showTab
            }
        default: {
            return {
                ...state
            }
        }
    }

}


export const menuReducer = (state = showMenu, action) => {
    switch (action.type) {
        case actionType.SHOW_MENU:
            return {
                ...state,
                menu: action.menu
            }
        default: {
            return {
                ...state
            }
        }
    }

}