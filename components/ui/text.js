import React from 'react'
import colors from '../../utils/theme/colors'
import fonts from '../../utils/theme/fonts'


const Text = ({variant = 'default', color = 'default', children}) => (
    <React.Fragment>
        <p className={`${variant} color-${color}`}>{children}</p>
        <style jsx>{`
            .default {
                font-size: ${fonts.size.kilo};
                font-weight: ${fonts.weight.kilo};
            }
            .color-default {
                color: ${colors.text};
            }
            .color-primary {
                color: ${colors.primary};
            }
            .color-contrast {
                color: ${colors.secondary};
            }
        `}</style>
    </React.Fragment>
)

export default Text