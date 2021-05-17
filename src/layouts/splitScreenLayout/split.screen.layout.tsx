import React from 'react';
import * as classes from './split.screen.style'
import { SplitScreenContextProvider } from 'contexts/split.screen.context'

const LayoutStatusDefault = 0;
const LayoutStatusOnlyLeftSide = 1;

export const SplitScreenLayout: React.FC = props => {
    const { children } = props;
    const [layoutStatus, setLayoutStatus] = React.useState(LayoutStatusDefault);
    const [classNameRoot, setClassNameRoot] = React.useState(classes.root);
    const [classNameRightColumn, setClassNameRightColumn] = React.useState(classes.rightColumn);

    React.useEffect(() => {
        if (layoutStatus == LayoutStatusOnlyLeftSide) {
            setClassNameRoot(classes.rootOnlyLeftSide);
            setClassNameRightColumn(classes.rightColumnHidden);
        } else {
            setClassNameRoot(classes.root);
            setClassNameRightColumn(classes.rightColumn);
        }
    }, [layoutStatus]);

    return (
        <SplitScreenContextProvider
            isLayoutRightSideVisible={layoutStatus == LayoutStatusDefault}
            setLayoutAsDefault={() => setLayoutStatus(LayoutStatusDefault)}
            setLayoutAsHideRightSide={() => setLayoutStatus(LayoutStatusOnlyLeftSide)}>
            <div className={classNameRoot}>
                <div className={classes.leftColumn}>
                    {children[0]}
                </div>
                <div className={classNameRightColumn}>
                    {children[1]}
                </div>
            </div>
        </SplitScreenContextProvider>
    )
}
