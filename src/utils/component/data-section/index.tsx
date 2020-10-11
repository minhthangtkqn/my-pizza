import { Button } from 'antd';
import React from 'react';
import style from './index.module.scss';

type Props = {
    headerTitle?: string,
};

const DataSection: React.FC<Props> = ({ headerTitle }) => {
    return (
        <div>
            <div className={style['red']}>
                {headerTitle}
            </div>

            <div>
                <Button>Click me</Button>
            </div>

            <div>
                <Button type="dashed" danger>Click me</Button>
            </div>

            <div className="text-blue-500 font-bold">
                ABCasdasdasdsa
            </div>

            <div style={{width: 300}} className="border my-text-center">
                hjgsd asg jdhas
            </div>
        </div>
    );
};

export default DataSection;
