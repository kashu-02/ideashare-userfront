import {forwardRef, createContext,useState, useMemo, useCallback, useContext, FC, ReactNode} from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})


export type SnackbarContextType = {
    message: string
    severity: AlertColor
    showSnackbar: (message: string, severity: AlertColor) => void
}

export const SnackbarContext = createContext<SnackbarContextType>({
    message: '',
    severity: 'error',
    showSnackbar: (_message: string, _severity: AlertColor) => {},
})

export const SnackbarContextProvider: FC<{
    children: ReactNode
}> = ({ children }) => {
    const context: SnackbarContextType = useContext(SnackbarContext)
    const [message, setMessage] = useState(context.message)
    const [severity, setSeverity] = useState(context.severity)

    // コンテクストオブジェクトに自分自身の値を変更する関数をセットする
    const newContext: SnackbarContextType = useMemo(
        () => ({
            message,
            severity,
            showSnackbar: (message: string, severity: AlertColor) => {
                setMessage(message)
                setSeverity(severity)
            },
        }),
        [message, severity, setMessage, setSeverity]
    )

    // スナックバーを閉じるためのハンドラー関数
    const handleClose = useCallback(() => {
        setMessage('')
    }, [setMessage])

    return (
        <SnackbarContext.Provider value={newContext}>
            {children}
            <Snackbar open={newContext.message !== ''}
                      message={newContext.message}
                      severity={newContext.severity}
                      onClose={handleClose}
                      autoHideDuration={3000}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    )
}

/** SnackbarContext を簡単に使うためのユーティリティ関数 */
export function useSnackbar(): SnackbarContextType {
    return useContext(SnackbarContext)
}