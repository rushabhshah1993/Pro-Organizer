import React, { Component } from 'react';
import styles from './CardInfo.css';

import Members from './../Members/Members';

class CardInfo extends Component {
    render() {
        return (
            <div className={styles.CardInfo}>
                <div className={styles.Header}>
                    <p className={styles.CardInfoTitle}>Title</p>
                    <p className={styles.CardInfoSubTitle}>in subtitle</p>
                </div>
                <div className={styles.Container}>
                    <label className={styles.Label}>Description</label>
                    <div className={styles.Description}>sdjkashdkjsah dsnakjdnsak dbsjkdhasjk cjkashdjksancjkasbncjksan cj sajccjsandjksandksa c askc sajkdnkdnsakcnsajknckjsa njksahdjksahjkdn dsbajkdbnas ckjdbsajkndkjsa  bdjksabndkjwn.</div>
                </div>
                <div className={styles.Container}>
                    <label className={styles.Label}>Members</label>
                    <Members member={'RS'} />
                </div>
                <div className={styles.Container}>
                    <label className={styles.Label}>Due Date</label>
                    <div className={styles.Description}>24 November 2019</div>
                </div>
            </div>
        )
    }
}

export default CardInfo;
