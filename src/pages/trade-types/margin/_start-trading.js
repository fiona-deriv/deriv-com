import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer, StartTradingBg } from '../components/_style'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import { DerivStore } from 'store'

const StartTrading = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    return (
        <>
                <StartTradingBg>
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="4rem">
                        {localize('Start trading CFDs on Deriv')}
                    </Header>

                    <Timeline>
                        <Timeline.Item title={<Localize translate_text="Practise" />}>
                            {is_eu_country
                                ? localize(
                                      'Open a demo MetaTrader 5 account on Deriv and practise with an unlimited amount of virtual funds.',
                                  )
                                : localize(
                                      'Open a demo Deriv MT5 (DMT5) or demo Deriv X account and practise with an unlimited amount of virtual funds.',
                                  )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Trade" />}>
                            {is_eu_country
                                ? localize(
                                      'Trade with a real Deriv MT5 (DMT5) account and get access to high leverage to trade positions larger than your existing capital.',
                                  )
                                : localize(
                                      'Trade with a real Deriv MT5 (DMT5) or real Deriv X account. Get access to high leverage and trade positions larger than your existing capital.',
                                  )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Withdraw" />}>
                            {localize(
                                'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                            )}
                        </Timeline.Item>
                    </Timeline>
                    <LinkButton
                        mt="4rem"
                        external="true"
                        type="mt5"
                        to="#demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        secondary="true"
                    >
                        {localize('Create free demo account')}
                    </LinkButton>
                </SmallContainer>
                </StartTradingBg>
        </>
    )
}

export default StartTrading
