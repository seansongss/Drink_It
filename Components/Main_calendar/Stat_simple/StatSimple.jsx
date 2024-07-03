import React from 'react'
import { View } from 'react-native'
import ProgressBar from '../../utils/ProgressBar'

import styles from './styles'

const StatSimple = () => {
    return (
        <View style={styles.statContainer}>
            {/* <View style={styles.statBox} /> */}
            {/* <View style={styles.statBox}>
                <ProgressBar
                    shouldAnimate={true} // to enable animation, default false
                    animateDuration={1000} // if animation enabled
                    data={[
                        { progress: 7, color: "rgb(255, 193, 2)" },
                        { progress: 13, color: "rgb(55, 106, 255)" },
                        { progress: 5, color: "rgb(229, 232, 249)" }
                    ]}
                />
            </View> */}
            <ProgressBar
                style={styles.statBox}
                barHeight={16}
                shouldAnimate={false} // to enable animation, default false
                animateDuration={1500} // if animation enabled
                data={[
                    { progress: 7, color: "orange" },
                    { progress: 10, color: "purple" },
                    { progress: 10, color: "green" }
                ]}
            />
            <ProgressBar
                style={styles.statBox}
                barHeight={16}
                shouldAnimate={false} // to enable animation, default false
                animateDuration={1500} // if animation enabled
                data={[
                    { progress: 7, color: "orange" },
                    { progress: 13, color: "blue" },
                    { progress: 5, color: "green" }
                ]}
            />
            <ProgressBar
                style={styles.statBox}
                barHeight={16}
                shouldAnimate={false} // to enable animation, default false
                animateDuration={1500} // if animation enabled
                data={[
                    { progress: 3, color: "yellow" },
                    { progress: 1, color: "orange" },
                    { progress: 2, color: "green" }
                ]}
            />
            <ProgressBar
                style={styles.statBox}
                barHeight={16}
                shouldAnimate={false} // to enable animation, default false
                animateDuration={1500} // if animation enabled
                data={[
                    { progress: 7, color: "yellow" },
                    { progress: 10, color: "blue" },
                    { progress: 10, color: "green" }
                ]}
            />
        </View>
    )
}

export default StatSimple