/* 
VOTE TYPES:
0 - AGAINST
1 - FOR
2 - ABSTAIN
*/
// Deployed Goerli: 0x9aF559bbB003Ea33Ad77898bb20D93E652Ff885f
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface CrazyDAO {
    
    enum ProposalState {
        Pending,    // 0 - Proposal is in delay period
        Active,     // 1 - Proposal is in voting period
        Canceled,   // 2 - Proposal was cancelled
        Defeated,   // 3 - Proposal was defeated
        Succeeded,  // 4 - Proposal succeeded
        Queued,     // 5 - NOT USED BY THIS CONTRACT
        Expired,    // 6 - Proposal failed to achieve quorum
        Executed    // 7 - Proposal succeeded and was executed
    }
    /**
     * @dev Supported vote types. Matches Governor Bravo ordering.
     */
    enum VoteType {
        Against,
        For,
        Abstain
    }

    /**
     * @dev Emitted when a proposal is created.
     */
    event ProposalCreated(
        uint256 proposalId,
        address proposer,
        address[] targets,
        uint256[] values,
        string[] signatures,
        bytes[] calldatas,
        uint256 voteStart,
        uint256 voteEnd,
        string description
    );

    /**
     * @dev Emitted when a proposal is canceled.
     */
    event ProposalCanceled(uint256 proposalId);

    /**
     * @dev Emitted when a proposal is executed.
     */
    event ProposalExecuted(uint256 proposalId);

    /**
     * @dev Emitted when a vote is cast without params.
     *
     * Note: `support` values should be seen as buckets. Their interpretation depends on the voting module used.
     */
    event VoteCast(
        address indexed voter, 
        uint256 proposalId, 
        uint8 support, 
        uint256 weight, 
        string reason
    );

    /**
     * @dev Emitted when a vote is cast with params.
     *
     * Note: `support` values should be seen as buckets. Their interpretation depends on the voting module used.
     * `params` are additional encoded parameters. Their interpepretation also depends on the voting module used.
     */
    event VoteCastWithParams(
        address indexed voter,
        uint256 proposalId,
        uint8 support,
        uint256 weight,
        string reason,
        bytes params
    );

    //----- Governance locked events -----\\
    event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator);
    event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);
    event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);
    event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold);

    //------------------------------\\
    //----- GOVERNANCE SETTERS -----\\
    //------------------------------\\

    // Submits a new proposal to the DAO
    /// @dev Proposals with identical inputs will require a different description string
    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) external returns (uint256);

    /**
     * @dev Casts a vote Against, For, or Abstain from a proposal
     * @param voteType Type of vote to cast:
     *  0: AGAINST
     *  1: FOR
     *  2: ABSTAIN
     */
    function castVote(uint256 proposalID, uint8 voteType) external returns (uint256);

    // Executes a proposal if it has suceeded using internally stored parameters
    function execute(uint256 proposalID) external;

    //------------------------------\\
    //----- GOVERNANCE GETTERS -----\\
    //------------------------------\\

    // Returns the starting block, ending block, proposer, and current state of a proposal
    function getProposal(uint256 proposalID) 
        external 
        view 
        returns(
            uint256 startBlock, 
            uint256 endBlock, 
            address proposer, 
            ProposalState proposalState
        );

    // Returns the votes against, for, and abstained for a proposal
    function proposalVotes(uint256 proposalID) 
        external 
        view 
        returns (
            uint256 againstVotes, 
            uint256 forVotes, 
            uint256 abstainVotes
        );

    // Returns the current state of a proposal
    /// @dev Requires internal hash ID, use {getInternalID} first
    function state(uint256 proposalId) external view returns(ProposalState);

    // Returns the number of votes an account had at a given block number
    function getVotes(address account, uint256 timepoint) external view returns (uint256);

    // Returns "CrazyDAO"
    function name() external view returns (string memory);

    // Returns the current block number
    /// @dev You must wait for another block to be produced for this block number to be used
    function clock() external view returns (uint48);

    // Returns the number of blocks since proposal submission before the voting period begins
    function votingDelay() external view returns (uint256);

    // Returns the number of blocks that the voting period spans
    function votingPeriod() external view returns (uint256);

    // Returns the number of votes required for a user to cast a proposal
    function proposalThreshold() external view returns (uint256);

    // Returns the fractional numerator of the quorum percentage (25) at a blocknumber
    // This can be adjusted by a DAO proposal
    function quorumNumerator(uint256 timepoint) external view returns (uint256);

    // Returns the fractional denominator of the quorum percentage (100)
    function quorumDenominator() external view returns (uint256);

    // Returns the number of votes required at a blocknumber for any proposal to reach quorum
    function quorum(uint256 timepoint) external view returns (uint256);

    // Returns the hash ID used by Governor-native functions (i.e., state())
    /// @dev This is only necessary for calling functions in IGovernor, but not for this contract
    function getInternalID(uint256 proposalID) external view returns(uint256);


    //--------------------------------------\\
    //----- GOVERNANCE-LOCKED FUNCTIONS -----\\
    //---------------------------------------\\

    /**
     * @dev Update the voting delay. This operation can only be performed through a governance proposal.
     *
     * Emits a {VotingDelaySet} event.
     */
    function setVotingDelay(uint256 newVotingDelay) external;

    /**
     * @dev Update the voting period. This operation can only be performed through a governance proposal.
     *
     * Emits a {VotingPeriodSet} event.
     */
    function setVotingPeriod(uint256 newVotingPeriod) external;

    /**
     * @dev Update the proposal threshold. This operation can only be performed through a governance proposal.
     *
     * Emits a {ProposalThresholdSet} event.
     */
    function setProposalThreshold(uint256 newProposalThreshold) external;

    /**
     * @dev Changes the quorum numerator.
     *
     * Emits a {QuorumNumeratorUpdated} event.
     *
     * Requirements:
     *
     * - Must be called through a governance proposal.
     * - New numerator must be smaller or equal to the denominator.
     */
    function updateQuorumNumerator(uint256 newQuorumNumerator) external;

}