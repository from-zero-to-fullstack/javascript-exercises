const each = require('jest-each').default;
const { displayCurrentDateTime } = require('./1');

describe('displayCurrentDateTime()', () => {
    each([
        // Monday
        ['02/28/2022 9:13:54', 'Today is Monday and it\'s 9:13:54 AM o\'clock'],
        ['02/28/2022 16:45:16', 'Today is Monday and it\'s 4:45:16 PM o\'clock'],
        ['02/28/2022 12:00:00', 'Today is Monday and it\'s 12:0:0 Noon o\'clock'],
        ['02/28/2022 0:00:00', 'Today is Monday and it\'s 12:0:0 Midnight o\'clock'],
        // Tuesday
        ['03/01/2022 9:13:54', 'Today is Tuesday and it\'s 9:13:54 AM o\'clock'],
        ['03/01/2022 16:45:16', 'Today is Tuesday and it\'s 4:45:16 PM o\'clock'],
        ['03/01/2022 12:00:00', 'Today is Tuesday and it\'s 12:0:0 Noon o\'clock'],
        ['03/01/2022 0:00:00', 'Today is Tuesday and it\'s 12:0:0 Midnight o\'clock'],
        // Wednesday
        ['03/02/2022 9:13:54', 'Today is Wednesday and it\'s 9:13:54 AM o\'clock'],
        ['03/02/2022 16:45:16', 'Today is Wednesday and it\'s 4:45:16 PM o\'clock'],
        ['03/02/2022 12:00:00', 'Today is Wednesday and it\'s 12:0:0 Noon o\'clock'],
        ['03/02/2022 0:00:00', 'Today is Wednesday and it\'s 12:0:0 Midnight o\'clock'],
        // Thursday
        ['03/03/2022 9:13:54', 'Today is Thursday and it\'s 9:13:54 AM o\'clock'],
        ['03/03/2022 16:45:16', 'Today is Thursday and it\'s 4:45:16 PM o\'clock'],
        ['03/03/2022 12:00:00', 'Today is Thursday and it\'s 12:0:0 Noon o\'clock'],
        ['03/03/2022 0:00:00', 'Today is Thursday and it\'s 12:0:0 Midnight o\'clock'],
        // Friday
        ['03/04/2022 9:13:54', 'Today is Friday and it\'s 9:13:54 AM o\'clock'],
        ['03/04/2022 16:45:16', 'Today is Friday and it\'s 4:45:16 PM o\'clock'],
        ['03/04/2022 12:00:00', 'Today is Friday and it\'s 12:0:0 Noon o\'clock'],
        ['03/04/2022 0:00:00', 'Today is Friday and it\'s 12:0:0 Midnight o\'clock'],
        // Saturday
        ['03/05/2022 9:13:54', 'Today is Saturday and it\'s 9:13:54 AM o\'clock'],
        ['03/05/2022 16:45:16', 'Today is Saturday and it\'s 4:45:16 PM o\'clock'],
        ['03/05/2022 12:00:00', 'Today is Saturday and it\'s 12:0:0 Noon o\'clock'],
        ['03/05/2022 0:00:00', 'Today is Saturday and it\'s 12:0:0 Midnight o\'clock'],
        // Sunday
        ['03/06/2022 9:13:54', 'Today is Sunday and it\'s 9:13:54 AM o\'clock'],
        ['03/06/2022 16:45:16', 'Today is Sunday and it\'s 4:45:16 PM o\'clock'],
        ['03/06/2022 12:00:00', 'Today is Sunday and it\'s 12:0:0 Noon o\'clock'],
        ['03/06/2022 0:00:00', 'Today is Sunday and it\'s 12:0:0 Midnight o\'clock'],
    ]).test('%s returns %s', (input, expected) => {
        const date = new Date(input);

        const actual = displayCurrentDateTime(date);

        expect(actual).toBe(expected);
    });
});