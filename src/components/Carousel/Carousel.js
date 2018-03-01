import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export class IsCarousel extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: this.props.data,
            });
        }, 100);
    }

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <div
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                key={val}
                                src={val.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: '220px' });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
