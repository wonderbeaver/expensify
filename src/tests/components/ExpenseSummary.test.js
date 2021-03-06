import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';



test('should render correctly with only one expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={9434} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render correctly with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={2314123124123} />);
    expect(wrapper).toMatchSnapshot();
})