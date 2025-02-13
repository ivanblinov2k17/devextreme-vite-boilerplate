import React from 'react';
import Splitter, { Item } from 'devextreme-react/splitter';
 
const SplitterApp = () => (
<React.Fragment>
    <div>
        <Splitter
            width={500}
            height={400}
            separatorSize={5}
        >
            <Item />
            <Item>
                <Splitter orientation="vertical" separatorSize={5}>
                    <Item />
                    <Item />
                    <Item />
                </Splitter>
            </Item>
        </Splitter>
    </div>
</React.Fragment>
);
 
export default SplitterApp;