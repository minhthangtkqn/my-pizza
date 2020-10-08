import { Button } from 'antd';
import React from 'react';

type Props = {
    headerTitle?: string,
};

const DataSection: React.FC<Props> = ({ headerTitle }) => {
    return (
        <div>
            <div>
                {headerTitle}
            </div>

            <div>
                <Button>Click me</Button>
            </div>

            <div>
                <Button type="dashed" danger>Click me</Button>
            </div>
        </div>
    );
};

export default DataSection;
