import React from 'react';
import './styles/zebraTable.scss';

class ZebraTable extends React.Component {

    render() {
        const { columns, title, datas } = this.props;
        return (
            <table class="zebra">
                <caption>{title}</caption>
                <thead>
                    <tr>
                        {
                            columns && columns.map((column) => {
                                return (
                                    <th>{column.title}</th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        datas && datas.map((data) => {
                            return (
                                <tr>
                                    {
                                        columns && columns.map((column) => {
                                            return (
                                                <td>{data[column.field]}</td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default ZebraTable;